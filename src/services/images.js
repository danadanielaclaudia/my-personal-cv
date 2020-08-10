export function getImages() {
    return fetch(`https://picsum.photos/v2/list?page=2&limit=100`).then((response) => {
      return Promise.all([
        response.json()
      ]);
    });
  }
  