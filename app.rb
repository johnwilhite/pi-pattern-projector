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

    erb :show_image
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

get '/display/:file' do
    erb :display, :locals => {:filename => params[:file]}
end

get '/display/zoom/:amount' do
    # if (amount === 'in') {
    #     currentZoomLevel += 5;
    # } else if (amount === 'out') {
    #     currentZoomLevel -= 5;
    # } else {
    #     currentZoomLevel = parseFloat(amount);
    # }
    # zoom command
end

get '/display/pan/:direction' do
    # pan command
end