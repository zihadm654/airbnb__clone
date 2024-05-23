"use client";

import { useCallback, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SafeListing, SafeReservation, SafeUser } from "@/types";
import { User } from "@prisma/client";
import { format } from "date-fns";

import useCountries from "@/hooks/use-countries";
import HeartButton from "@/components/listings/HeartButton";

// import Button from "../Button";
import ClientOnly from "../ClientOnly";

interface ListingCardProps {
  data: any;
  reservation?: any;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: any | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.location);

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      onClick={() => router.push(`/listings/${data.id}`)}
      className="group col-span-1 cursor-pointer"
    >
      <div className="flex w-full flex-col gap-2">
        <div
          className="
            relative 
            aspect-square 
            w-full 
            overflow-hidden 
            rounded-xl
          "
        >
          {/* <Image
            fill
            className="
              h-full 
              w-full 
              object-cover 
              transition 
              group-hover:scale-110
            "
            src={data.image}
            alt="Listing"
          /> */}
          <div
            className="
            absolute
            right-3
            top-3
          "
          >
            {/* <HeartButton listingId={data.id} currentUser={currentUser} /> */}
          </div>
        </div>
        <div className="text-lg font-semibold">
          {location?.region}, {location?.label}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">$ {price}</div>
          {!reservation && <div className="font-light">night</div>}
        </div>
        {/* {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )} */}
      </div>
    </div>
  );
};

export default ListingCard;
