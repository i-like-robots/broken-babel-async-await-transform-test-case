export default async function getStatus() {
  const url = "/path/to/status";

  try {
    const response = await fetch(url);

    if (response.ok) {
      return response.json();
    } else {
      throw Error(
        `${url} responded with ${response.status}`
      );
    }
  } catch (error) {
    console.error(error)
  }
}
