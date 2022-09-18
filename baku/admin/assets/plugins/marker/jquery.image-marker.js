;(function( $, window, document, undefined ) {

  'use strict';

    // defining vars in the begining of every function to predict hoisting
    // define vars separatelly to avoid mistakes with comas and semicolons
    var pluginName = 'imageMarker';
    var defaults = {drag_disabled: false};

    function Plugin ( element, options ) {
      this.$element = $(element);
      this.settings = $.extend( {}, defaults, options );
      this._defaults = defaults;
      this._name = pluginName;
      this._markers = [];
      this.$left_box = null;
      this.$right_box = null;
      this.$drag_box = null;
      this.init();
    }

    $.extend( Plugin.prototype, {
      init: function() {
        this.renderMarkup();
        this.bindListeners();
      },

      // preparing the markup for insertion into target element, using $ prefix for jquery objects
      // using BEM for class naming (block__element--modifier), control visual part with updating css
      renderMarkup: function() {
        var $container =                    $('<div class="image-marker-container"></div>');
        var $left_box_wrapper =             $('<div class="image-marker-container__box image-marker-container__box--left"></div>');

        // linking element for fast manipulation in future (adding markers, checking height), so no need for searching for element again
        var $left_box =  this.$left_box =   $('<div class="image-marker-container__box__content"></div>');
        var $right_box_wrapper =            $('<div class="image-marker-container__box image-marker-container__box--right"></div>');
        var $right_box = this.$right_box =  $('<div class="image-marker-container__box__content"></div>');
        var $image_box =                    $('<div class="image-marker-container__box image-marker-container__box--image"></div>');
        var $drag_box = this.$drag_box =    $('<div class="image-marker-container__box image-marker-container__box--drag"></div>');
        var $image =                        $('<img class="image-marker-container__img"/>');

        var onDrop = function(e, ui) {
          var dropped = ui.draggable;
          var $droppedOn = $(this).find('.image-marker-container__box__content');
          var marker = $.data(dropped[0],'marker');

          // prevent move if does not fit col
          if ($(this).height() < $droppedOn.height() + $(dropped).height()) return dropped.draggable('option', 'revert', true);

          // prevent move if same col
          if ($(this).hasClass('image-marker-container__box--left') && marker.col == 1) return dropped.draggable('option', 'revert', true);
          if (!$(this).hasClass('image-marker-container__box--left') && marker.col == 2) return dropped.draggable('option', 'revert', true);

          // add col id to marker obj 
          marker.col = $(this).hasClass('image-marker-container__box--left') ? 1 : 2;
          $(dropped).detach().css({top: 0,left: 0}).appendTo($droppedOn);
        };

        $left_box_wrapper.append($left_box).droppable({accept: '.image-marker__text-box', drop: onDrop});;
        $right_box_wrapper.append($right_box).droppable({accept: '.image-marker__text-box', drop: onDrop});

        $image.attr('src', this.settings.src);
        $image_box.append($image).append($drag_box);

        // bundling the markup into vitrual container
        $container.append($left_box_wrapper).append($right_box_wrapper).append($image_box);

        // inserting virtual container as a last step regarding to performance issues (slow dom, reflow, repaint)
        this.$element.append($container);
      },

      // adding listeners for client to trigger plugin functions
      bindListeners: function() {
        this.$element.on('add_marker', (function(e, data) {
          this.addTextbox(data);
        }).bind(this)); // binding context to avoid closure in parent function (var self = this)
        this.$element.on('get_markers', (function(e, cb) {

          // calling callback function with array of all markers added to image so client can save them, returning new array for keep data immutable from outside
          cb(Array.prototype.concat.apply([], this._markers));
        }).bind(this));
      },

      // adding text box
      addTextbox: function(marker) {

        // all manipulations with virtual element should be done before insertion regarding to performance issues
        var $text_box = $('<div class="image-marker__text-box"></div>');
        var $dot = $('<div class="image-marker__dot"></div>');
        var $line = $('<div class="image-marker__line"></div>');
        var $left_box = this.$left_box;
        var onDrag = function() {
              var text_box_offset = ($text_box.parent()[0] == $left_box[0]) ? ($text_box.parent().width() - 4) : 4;
              var x1 = $text_box.offset().left + text_box_offset;
              var x2 = $dot.offset().left + ($dot.width() / 2);
              var y1 = $text_box.offset().top + ($text_box.height() / 2);
              var y2 = $dot.offset().top + ($dot.height() / 2);
              var hypotenuse = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
              var angle = Math.atan2((y1 - y2), (x1 - x2)) *  (180 / Math.PI);

              if (angle >= 90 && angle < 180) {
                  y1 = y1 - (y1 - y2);
              }
              if (angle > 0 && angle < 90) {
                  x1 = x1 - (x1 - x2);
                  y1 = y1 - (y1 - y2);
              }
              if (angle <= 0 && angle > -90) {
                  x1 = x1 - (x1 - x2);
              }

              $line.queue(function() {
                  $(this).offset({top: y1, left: x1});
                  $(this).dequeue();
              }).queue(function() {
                  $(this).width(hypotenuse);
                  $(this).dequeue();
              }).queue(function() {
                  $(this).rotate(angle);
                  $(this).dequeue();
              });

              marker.pos.x = parseInt($dot.css('left'));
              marker.pos.y = parseInt($dot.css('top'));
           };

        var $title = $('<h2 class="image-marker__text-box__title" contenteditable="true">Title</h2>');
        if (!!marker.title) $title.text(marker.title);
        $title.on('change keydown paste input', function() {
          marker.title = $title.text();
        });
        $text_box.append($title);

        var $content = $('<p class="image-marker__text-box__content" contenteditable="true">Content</p>');
        if (!!marker.content) $content.text(marker.content);
        $content.on('change keydown paste input', function() {
          marker.content = $content.text();
        });
        $text_box.append($content);

        if (!!marker.className) {
          $text_box.addClass(marker.className);
          $dot.addClass(marker.className);
          $line.addClass(marker.className);
        }

        if (marker.col == 1) {
          return this.mountTo(this.$left_box, $text_box, $dot, $line, onDrag, marker);
        } else if (marker.col == 2) {
          return this.mountTo(this.$right_box, $text_box, $dot, $line, onDrag, marker);
        } else {
          if (this.mountTo(this.$left_box, $text_box, $dot, $line, onDrag, marker)) return marker.col = 1;
          if (this.mountTo(this.$right_box, $text_box, $dot, $line, onDrag, marker)) return marker.col = 2;
        }
      },

      mountTo: function($target, $text_box, $dot, $line, onDrag, marker) {

        // hidding element, but still displaying for future measurements
        $text_box.css({visibility: 'hidden'});
        $target.append($text_box);

        if ($target.height() > $target.parent().height()) {
          $text_box.remove();
          return false;
        }

        if (!this.settings.drag_disabled) {
          var $close_btn = $('<div class="image-marker__text-box__close-btn">X</div>');
          $close_btn.on('click', function() {
            var idx = this._markers.indexOf(marker);
            this._markers.splice(idx, 1);
            $text_box.remove();
            $dot.remove();
            $line.remove();
            this.$element.trigger('drag_all');
            this.$element.trigger('drag_all');
          }.bind(this));
          $text_box.append($close_btn);
        }

        $text_box.css({visibility: 'visible'});

        if (!marker.pos) {
          marker.pos = {
            x: ($text_box.parent()[0] == this.$left_box[0]) ? 0 : this.$drag_box.width() - 20,
            y: $text_box.offset().top - $text_box.parent().offset().top + $text_box.height() / 2 - 10
          };
        }

        $dot.css({top: marker.pos.y + 'px', left: marker.pos.x + 'px'});
        this.$drag_box.append($line).append($dot);

        $dot.draggable({
          containment: 'parent',
          distance: 0,
          delay: 0,
          disabled: this.settings.drag_disabled
        }, {
          drag: onDrag
        });

        this.$element.on('drag_all', onDrag);

        if (!this.settings.drag_disabled) $text_box.draggable({
          revert: true
        }, {
          start: function() {
            $dot.css({visibility: 'hidden'});
            $line.css({visibility: 'hidden'});
          },
          stop: function() {
            this.$element.trigger('drag_all');
            this.$element.trigger('drag_all');
            $dot.css({visibility: 'visible'});
            $line.css({visibility: 'visible'});
          }.bind(this)
        });

        $.data($text_box[0], 'marker', marker);

        onDrag();
        onDrag();

        // if case of success add to memory
        this._markers.push(marker);
        return true;
      }
    });

    $.fn[ pluginName ] = function( options ) {
      return this.each(function() {
        if ( !$.data( this, 'plugin_' + pluginName ) ) $.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
      });
    };

    $.fn.rotate = function(degrees) {
      $(this).css({'transform' : 'rotate('+ degrees +'deg)'});
      return $(this);
    };

})( jQuery, window, document );

// todo: dot size
// todo: text_box order

// todo: remove $.fn.rotate
