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

export function museumCollections () {
  return getData('https://uat-iconcreations.com/2022/gem/public/api/web/museum/collections-page')
}

export function CollectionItemLoader ({params}) {
  const id = params.itemId;

  return getData(`https://uat-iconcreations.com/2022/gem/public/api/web/museum/collections/${id}/details`);
}

export function searchAll () {
  let params = new URL(document.location).searchParams;
  let keyword = params.get("keyword");

  return getData(`https://uat-iconcreations.com/2022/gem/public/api/web/search?keyword=${keyword}`)
}

export function Filter (filterType) {
  let filterData = [];
  async function getData () {
      const response = await fetch(`https://uat-iconcreations.com/2022/gem/public/api/web/museum/collections/filters/${filterType}`);
      if (!response.ok) {
        throw json({ message: 'Could not fetch .' });
      } else {
        const resData = await response.json();
        filterData.push(...resData.data);
      }
    }
    getData();
    return filterData;
}

