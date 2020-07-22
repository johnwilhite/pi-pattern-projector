require 'sinatra'
require 'json'

get '/' do
  erb :form
end

post '/upload' do
    # todo check if pdf
    # File.extname(params[:file][:filename])
    file = params[:file][:tempfile]
    filename = "#{params[:brand]}_#{params[:garment]}_#{params[:sizes]}.pdf".tr(' ', '_')

    puts filename

    File.open("uploaded-patterns/#{filename}", 'wb') do |f|
        f.write(file.read)
    end

    redirect to("/display/#{filename}")
end

get '/files' do
    content_type :json
    Dir.glob('uploaded-patterns/*.pdf')
        .map { |file| file.partition('/').last }
        .sort
        .to_json
end

get '/display/close' do
    # close file
end

get '/display/:file_name' do
    spawn("fbgs -xxl ./uploaded-patterns/#{params[:file_name]}")
    erb :display, :locals => {:filename => params[:file_name]}
end

get '/display/zoom/:amount' do
    puts params[:amount]
    if params[:amount] == 'in'
        spawn('ydotool key plus')
    elsif params[:amount] == 'out'
        spawn('ydotool key minus')
    else
        spawn("ydotool type #{params[:amount]}s")
    end
end

get '/display/pan/:direction' do
    if ['left', 'right', 'up', 'down'].include? params[:direction]
        spawn("ydotool key #{params[:direction]}")
    end
end