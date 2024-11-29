import Image from './Image'
import Video from './Video'

export default class MediaFactory {
  constructor(data) {
    try {
      if (data.image) return new Image(data)
      if (data.video) return new Video(data)
    } catch (error) {
      console.error(error.message)

      return null
    }
  }
}
