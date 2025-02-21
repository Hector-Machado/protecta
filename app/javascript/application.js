import { Turbo } from '@hotwired/turbo-rails'
import TurboPower from 'turbo_power' // https://github.com/marcoroth/turbo_power-rails
TurboPower.initialize(Turbo.StreamActions)

import "trix"
import "@rails/actiontext"
import "vanilla-nested"
import './controllers'

import * as ActiveStorage from '@rails/activestorage'
ActiveStorage.start()

import Rails from '@rails/ujs'
Rails.start()

// Make accessible for Electron and Mobile adapters
window.Turbo = Turbo
window.Rails = Rails
