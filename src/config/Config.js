import { json } from "react-router-dom";

export async function getData (url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw json({ message: 'Could not fetch .' });
  } else {
    const resData = await response.json();
    return resData;
  }
}

export function homeLoader () {
  return getData('https://uat-iconcreations.com/2022/gem/public/api/web/home');
};

export function museumLoader () {
  return getData('https://uat-iconcreations.com/2022/gem/public/api/web/museum/museum-page');
};




