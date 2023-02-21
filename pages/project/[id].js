import projects from "@/data/projects.json"
import ProjectDetail from '../../components/ProjectDetail';

export default function ProjectPage({project}) {
  return <ProjectDetail project={project} />;
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { id: project.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.id === parseInt(params.id));

  return { props: { project } };
}
