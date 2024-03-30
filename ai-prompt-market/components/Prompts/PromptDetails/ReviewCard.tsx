'use client'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Rating from "@/utils/Rating";
import { styles } from "@/utils/styles";
import { Avatar } from "@nextui-org/react";
import { User } from '@clerk/nextjs/server';

export default function ReviewCard({ item }: { item: any }) {
  console.log(item);
  // const [user, setUser] = useState<User | null>(null);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     await axios.get('/api/personal').then((res) => {
  //       setUser(res.data.user);
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  //     console.log(user);
  //     return user;
  //   }
  //   fetchUser();
  // }, [])

  return (
    <div className="flex my-2">
      <div>
        <Avatar size="lg" src={item?.user?.profileImageUrl} />
      </div>
      <div className="pl-3">
        <div className="flex items-center">
          <span className={`${styles.label} !text-xl text-white`}>
            {item?.user?.firstName + " " + item?.user?.lastName!}
          </span>
          <span className={`${styles.label} pl-3`}>
            {/* {format(item?.createdAt)} */}
          </span>
          <Rating rating={item?.rating} />
        </div>
        <p className={`${styles.paragraph} whitespace-pre-line`}>
          {item?.comment}
        </p>
      </div>
    </div>
  );
};

