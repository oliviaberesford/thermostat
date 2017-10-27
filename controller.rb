# ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require 'sinatra/flash'

class Thermo < Sinatra::Base

  enable :sessions

  get '/' do
    File.read(File.join('public', 'thermostat.html'))
  end

  run if app_file == $0

end
