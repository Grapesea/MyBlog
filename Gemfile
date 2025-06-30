# frozen_string_literal: true

source 'https://gems.ruby-china.com/'

git_source(:github) { |repo_name| "https://github.com/#{repo_name}" }
gem "jekyll"
gem "github-pages", group: :jekyll_plugins
gem 'jekyll-feed'
gem 'jekyll-readme-index'
gem 'jemoji'
gem 'webrick'

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]