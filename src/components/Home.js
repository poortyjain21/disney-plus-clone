import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Viewer from "./Viewers.js";
import Movies from "./Movies";
import db from "../firebase";
import { useDispatch } from "react-redux"; // dispatch to dispatch the action
import { setMovies } from "../features/movie/movieSlice"; // action

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        console.log(doc);
        return { id: doc.id, ...doc.data() };
      });
      dispatch(setMovies(tempMovies));
      console.log(tempMovies);
    });
  }, []);
  return (
    <Container>
      <ImgSlider />
      <Viewer />
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  overflow-x: hidden;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  &:before {
    content: "";
    background: url("/images/home-background.png") center/cover no-repeat fixed;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

export default Home;
