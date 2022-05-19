import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Space from "../../components/Space/Space";
import { fetchSpaces } from "../../store/space/actions";
import { selectSpaces } from "../../store/space/selector";

export default function HomePage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  // console.log("spaces", spaces);
  return (
    <>
      <div>
        {spaces.map((space) => {
          return (
            <Space
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
              showLink={true}
            />
          );
        })}
      </div>
    </>
  );
}
