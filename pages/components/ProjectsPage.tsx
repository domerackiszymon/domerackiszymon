import { createApolloFetch } from "apollo-fetch";

const fetchData = createApolloFetch({
  uri: "http://localhost:3000/api",
});

const ProjectsPage = (props) => {
  return (
    <div>
      <h2>My Projects</h2>
      {props.data === {} ? (
        <p>Oops, couldn't fetch my projects</p>
      ) : (
        <>
          <div>
            <div>
              <h3></h3>
              <p></p>
            </div>
            <div>
              <a href=""></a>
              <a href=""></a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const { data } = await fetchData({
      query: ``,
    });
    return { props: data };
  } catch (err) {
    console.log("Error: " + err);
    return { props: {} };
  }
};

export default ProjectsPage;
