import Carousel from 'stimulus-carousel'

export default class extends Carousel {
  connect() {
    console.log('entrou')
    super.connect()
  }

}
