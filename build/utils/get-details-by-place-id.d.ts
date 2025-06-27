/// <reference types="google.maps" />
/**
 * Fetches detailed information about a place using its Place ID via Google Maps PlacesService.
 *
 * This function wraps the `google.maps.places.PlacesService.getDetails` method in a Promise,
 * allowing you to use `async/await` syntax. It creates a temporary DOM element to initialize
 * the PlacesService client-side.
 *
 * @param {string} placeId - The unique identifier of the place to fetch details for.
 * @param {string[]} [fields] - Optional array of specific fields to include in the response.
 *                              If omitted, defaults to ['name', 'formatted_address', 'geometry', 'place_id'].
 *
 * @returns {Promise<google.maps.places.PlaceResult | null>} - A Promise that resolves to the PlaceResult object,
 *                                                              or rejects if the API request fails.
 *
 * @example
 * const placeDetails = await getDetailsByPlaceId("ChIJN1t_tDeuEmsRUsoyG83frY4");
 * console.log(placeDetails?.name, placeDetails?.geometry?.location?.lat());
 */
declare const getDetailsByPlaceId: (placeId: string, fields?: string[] | undefined) => Promise<google.maps.places.PlaceResult | null>;
export default getDetailsByPlaceId;
