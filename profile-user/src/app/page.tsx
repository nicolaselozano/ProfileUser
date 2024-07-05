import Interest from "@/Components/Interests/Interest";
import AboutMe from "@/Components/Profile/AboutMe/AboutMe";
import DescriptionP from "@/Components/Profile/DescriptionP";
import UserForm from "@/Components/UserForm/UserForm";
import style from './page.module.css';

export default function Home() {
  return (
    <main>
      <DescriptionP/>
      <div className={style.contentContainer}>
        <AboutMe/>
      </div>
      <div className={style.contentContainer}>
        <Interest/>
      </div>
        <UserForm/>
    </main>
  );
}
