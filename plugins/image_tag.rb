# Title: Simple Image tag for Jekyll
# Authors: Brandon Mathis http://brandonmathis.com
#          Felix Schäfer, Frederic Hemberger
# Description: Easily output images with optional class names, width, height, title and alt attributes
#
# Syntax {% img [class name(s)] [http[s]:/]/path/to/image [width [height]] [title text | "title text" ["alt text"]] %}
#
# Examples:
# {% img /images/ninja.png Ninja Attack! %}
# {% img left half http://site.com/images/ninja.png Ninja Attack! %}
# {% img left half http://site.com/images/ninja.png 150 150 "Ninja Attack!" "Ninja in attack posture" %}
#
# Output:
# <img src="/images/ninja.png">
# <img class="left half" src="http://site.com/images/ninja.png" title="Ninja Attack!" alt="Ninja Attack!">
# <img class="left half" src="http://site.com/images/ninja.png" width="150" height="150" title="Ninja Attack!" alt="Ninja in attack posture">
#

module Jekyll

  class ImageTag < Liquid::Tag
    @img = nil
    @type = nil

    def initialize(tag_name, markup, tokens)
      attributes = ['class', 'src', 'width', 'height', 'title']
      @type = tag_name

      if markup =~ /(?<class>\S.*\s+)?(?<src>(?:https?:\/\/|\/|\S+\/)\S+)(?:\s+(?<width>\d+))?(?:\s+(?<height>\d+))?(?<title>\s+.+)?/i
        @img = attributes.reduce({}) { |img, attr| img[attr] = $~[attr].strip if $~[attr]; img }
        if /(?:"|')(?<title>[^"']+)?(?:"|')\s+(?:"|')(?<alt>[^"']+)?(?:"|')/ =~ @img['title']
          @img['title']  = title
          @img['alt']    = alt
        else
          @img['alt']    = @img['title'].to_s.gsub(/"/, '&#34;')
        end
        @img['class'].gsub!(/"/, '') if @img['class']
      end
      super
    end

    def render(context)
      if @img
        if @type == "figure"
          figure = "<figure class='img #{@img['class']}'>
            <img src='#{@img['src']}' title='#{@img['title']}' alt='#{@img['title']}'>
            <figcaption>#{@img['title']}</figcaption>
           </figure>"
          TemplateWrapper.safe_wrap(figure)
        else
          img = "<img #{@img.collect {|k,v| "#{k}=\"#{v}\"" if v}.join(" ")}>"
          TemplateWrapper.safe_wrap(img)
        end
      else
        "Error processing input, expected syntax: {% img [class name(s)] [http[s]:/]/path/to/image [width [height]] [title text | \"title text\" [\"alt text\"]] %}"
      end
    end
  end
end

Liquid::Template.register_tag('figure', Jekyll::ImageTag)
Liquid::Template.register_tag('img', Jekyll::ImageTag)
