# Title: Simple Equations for Octopress
# Author: Manuel
# Description: Write equations.
#
# Example:
# {% align %}
# & 8x^6 + 4x^5+x^3 : 8x^3 + 4x^2 + 2^x= x^3 -\frac{1}{4}x + \frac{1}{4} \\
# & -(8x^6 + 4x^5 + 2x^4) \\
# \hline
# & -2x^4 + x^3 \\
# & -(-2x^4 - x^3 -\frac{1}{2}x^2) \\
# \hline
# & 2x^3 +\frac{1}{2}x^2 \\
# & -(2x^3 + x^2 +\frac{1}{2}x) \\
# \hline
# & -\frac{1}{2}x^2 -\frac{1}{2}x \\ 
# {% endalign %}

require './plugins/raw'

module Jekyll
  class AlignBlock < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      code = super 
        .gsub(/</,'\lt')
        .gsub(/>/,'\gt')
      source = "<figure class='equation'>\\begin{align}"
      source += "#{code.strip}\\end{align}</figure>"

      TemplateWrapper.safe_wrap(source)
    end
  end
end

Liquid::Template.register_tag('align', Jekyll::AlignBlock)
