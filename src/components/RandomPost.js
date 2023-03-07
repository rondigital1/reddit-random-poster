import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryGroup from './CategoryGroup';
import ImageEnlarger from './ImageEnlarger';
import styled from 'styled-components';
import '../Gallery.css';
import * as te from 'tw-elements';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

export default function RandomPost(props) {
  const [posts, setPosts] = useState();
  const [subreddit, setSubreddit] = useState('EarthPorn');
  const [category, setCategory] = useState('top');

  useEffect(() => {
    async function startFetching() {
      setPosts(null);
      const { data } = await axios.get(`https://www.reddit.com/r/${subreddit}/${category}.json??&t=year&limit=24`);
      if (!ignore) {
        const listItems = data.data.children.map((post) => (
          <ImageEnlarger src={post.data.url} alt={post.data.title} width={700} height={700} key={post.data.id} />
        ));

        setPosts(listItems);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [category, subreddit]);

  return (
    <div className="Buttons">
      <h1>
        {category} Posts in <i>r/{subreddit}</i>
      </h1>
      <div className="Categories">
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name="best"
          aria-pressed={props.isPressed}
          onClick={() => setCategory('best')}
        >
          <span className="visually-hidden">Best posts</span>
        </ButtonToggle>
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name={props.name}
          aria-pressed={props.isPressed}
          onClick={() => setCategory('hot')}
        >
          <span className="visually-hidden">Hot posts</span>
        </ButtonToggle>
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name={props.name}
          aria-pressed={props.isPressed}
          onClick={() => setCategory('new')}
        >
          <span className="visually-hidden">New posts</span>
        </ButtonToggle>
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name={props.name}
          aria-pressed={props.isPressed}
          onClick={() => setCategory('top')}
        >
          <span className="visually-hidden">Top posts</span>
        </ButtonToggle>
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name={props.name}
          aria-pressed={props.isPressed}
          onClick={() => setCategory('rising')}
        >
          <span className="visually-hidden">Rising posts</span>
        </ButtonToggle>
      </div>
      <div className="Subreddits">
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name={props.name}
          aria-pressed={props.isPressed}
          onClick={() => setSubreddit('dankmemes')}
        >
          <span className="visually-hidden">dankmemes</span>
        </ButtonToggle>
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name={props.name}
          aria-pressed={props.isPressed}
          onClick={() => setSubreddit('wallpapers')}
        >
          <span className="visually-hidden">wallpapers</span>
        </ButtonToggle>
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name={props.name}
          aria-pressed={props.isPressed}
          onClick={() => setSubreddit('dogpictures')}
        >
          <span className="visually-hidden">dogpictures</span>
        </ButtonToggle>
        <ButtonToggle
          type="button"
          className="btn toggle-btn"
          name={props.name}
          aria-pressed={props.isPressed}
          onClick={() => setSubreddit('EarthPorn')}
        >
          <span className="visually-hidden">EarthPorn</span>
        </ButtonToggle>
      </div>
      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">{posts}</div>
        </div>
      </section>
    </div>
  );
}
