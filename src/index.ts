import GooglePlacesAutocomplete from './google-places-autocomplete';
import getLatLng from './utils/get-lat-lng';
import geocodeByAddress from './utils/geocode-by-address';
import geocodeByLatLng from './utils/geocode-by-lat-lng';
import geocodeByPlaceId from './utils/geocode-by-place-id';
import {getDetailsByPlaceId} from './utils/get-details-by-place-id';

export {
  getLatLng,
  geocodeByAddress,
  geocodeByLatLng,
  geocodeByPlaceId,
  getDetailsByPlaceId,
};
export default GooglePlacesAutocomplete;
