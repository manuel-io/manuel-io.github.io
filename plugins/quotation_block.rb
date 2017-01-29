# Title: Simple quotation for Octopress
# Author: Manuel
# Description: Write quotation.
#
# Example:
# {% quotation Douglas Adams %}
# Parents of young organic life forms should be warned, that
# towels can be harmful, if swallowed in large quantities
# {% endeqation %}

require './plugins/raw'

module Jekyll
  class QuotationBlock < Liquid::Block

    def initialize(tag_name, markup, tokens)
      @author = markup.to_s
      super
    end

    def render(context)
      quote = super
      author = "<address>#@author</address>" unless @author.empty?
      source = "<blockquote><p>#{quote}</p>#{author}</blockquote>"
      TemplateWrapper.safe_wrap(source)
    end
  end
end

Liquid::Template.register_tag('quotation', Jekyll::QuotationBlock)
