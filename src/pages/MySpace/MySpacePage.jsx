import React, { useState, useEffect } from "react";
import Space from "../../components/Space/Space";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUser,
  selectToken,
  selectMySpace,
} from "../../store/user/selectors";
import Container from "react-bootstrap/Container";
import StoryCarousel from "../../components/StoryCarousel/StoryCarousel";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { fetchSpaces } from "../../store/space/actions";

export default function MySpace() {
  const space = useSelector(selectMySpace);
  const profile = useSelector(selectUser);
  const token = useSelector(selectToken);
  const [editMode, setEditMode] = useState(false);
  const [postStoryMode, setpostStoryMode] = useState(false);
  const navigate = useNavigate();

  if (token === null) {
    navigate("/");
  }

  if (space === null) {
    return <Loading />;
  }

  const displayButtons = profile?.id === space.userId;

  return (
    <Container>
      <Space
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <StoryCarousel owner space={space} />
    </Container>
  );
}
