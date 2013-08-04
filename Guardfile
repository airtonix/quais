# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'less', :all_on_start => true, :all_after_change => true do
  watch(%r{quais/static/css/.+\.less$})
end

guard 'livereload' do
  watch(%r{quais/static/css/.+\.(css)})
  watch(%r{quais/templates/.+\.(html)})
end

guard 'coffeescript', :input => 'quais/static/js/', :output => 'quais/static/js/'
