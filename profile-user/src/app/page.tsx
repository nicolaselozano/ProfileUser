import AboutMe from "@/Components/Profile/AboutMe/AboutMe";
import DescriptionP from "@/Components/Profile/DescriptionP";
import UserForm from "@/Components/UserForm/UserForm";

export default function Home() {
  return (
    <main className={``}>
      <DescriptionP/>
      <AboutMe/>
      <UserForm/>
    </main>
  );
}
