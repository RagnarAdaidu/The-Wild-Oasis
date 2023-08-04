import { useQuery } from "@tanstack/react-query";
// import { getBooking } from "../../services/apiBooking";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking(){
  const {bookingId} = useParams()

  const { isLoading, data: booking, error} = useQuery({
    queryKey: ['booking', bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false
  })
  // console.log({isLoading})
  return { isLoading, error, booking}
}