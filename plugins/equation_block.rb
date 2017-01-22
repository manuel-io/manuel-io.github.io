# Title: Simple Equations for Octopress
# Author: Manuel
# Description: Write equations.
#
# Example:
# {% equation %}
# f(\zeta) = \frac{1}{2\pi i}\oint_\gamma \frac{f(z)}{z-\zeta}\, dz
# {% endeqation %}

require './plugins/raw'

module Jekyll
  class EquationBlock < Liquid::Block

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      code = super 
        .gsub(/</,'\lt')
        .gsub(/>/,'\gt')
      source = "<figure class='equation'>\\begin{equation}"
      source += "#{code.strip}\\end{equation}</figure>"

      TemplateWrapper.safe_wrap(source)
    end
  end
end

Liquid::Template.register_tag('equation', Jekyll::EquationBlock)
