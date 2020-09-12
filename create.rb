
desktop =  File.expand_path("~/Desktop")
folder_name = "我現在做的"
file_name = "Chapter_1"
text = "# 1\n# 2\n- 1\n- 2\n[123](123)"
# puts `echo $USER`
require 'fileutils'
FileUtils.mkdir_p( "#{desktop}/#{folder_name}")
out_file = File.open( "#{desktop}/#{folder_name}/#{file_name}.md", "w") {|f| f.write("#{text}") }