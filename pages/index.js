import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
  Service,
  BigNFTSlider,
  Subscribe,
  Title,
  Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  FollowerTab,
  Slider,
  Brand,
  Video,
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      /> 
      <Category />
     
      <Subscribe />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      {/*
  
     */}
      {/* <AudioLive />
      <FollowerTab />
      <Slider />
      <Collection />
      */}
      {/*
      <NFTCard />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
  
     
      <Brand />
      <Video /> */}
    </div>
  );
};

export default Home;