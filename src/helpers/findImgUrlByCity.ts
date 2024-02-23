import { CityImg, CityList } from '../constants'

const findImgUrlByCity = (city: string): string | undefined => {
  switch (city) {
    case CityList.NEW_YORK:
      return CityImg.NEW_YORK;
    case CityList.LONDON:
      return CityImg.LONDON;
    case CityList.KYIV:
      return CityImg.KYIV;
    default:
      return undefined; 
  }
}

export default findImgUrlByCity;
