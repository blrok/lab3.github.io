import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { BsFillImageFill } from "react-icons/bs";
import { BsFillBookFill } from "react-icons/bs";
import { BsFillPhoneVibrateFill} from "react-icons/bs";
import { BsMailbox2 } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


export default function Home() {
  return (
      <div className={styles.cv}>
        <Head>
          <title>Blr Oktyabri's CV</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
      
        <div className={styles.main}>
          <div className={styles.zeroPart}></div>
          <div className={styles.firstPart}>
            <div className={styles.name}> Октябрь Болортунгалаг</div>
            <div className={styles.about}>
              <div className={styles.title}> About </div>
              <div className={styles.description}> Юмыг төгс, яг өөрийнхөө бодсон шигээ юмыг хийх гэж хичээдэг.Асуудал шийдвэрлэх чадвар сайтай.Сул тал залхуу бас цагийн менежмэнт сайн биш.Ажлыг цагийн тулгаж хийгээд, тэрнээсээ таашаал авдаг муу зуршилтай.Одоо сул талуудаа засах гэж хичээж байгаа. </div>
            </div>
            <div className={styles.experience}>
              <div className={styles.title}> Experience </div>
              <div className={styles.expData}>
                <div className={styles.year}> 2022-2025 </div>
                <div className={styles.information}>
                  <div className={styles.subtitle}> Tomyo </div>
                  <div className={styles.description}> Front-end developer </div>
                </div>
              </div>
              <div className={styles.expData}>
                <div className={styles.year}> 2025-2030</div>
                <div className={styles.information}>
                  <div className={styles.subtitle}> Apple</div>
                  <div className={styles.description}> Fullstack developer</div>
                </div>
              </div>
            </div>
            <div className={styles.experience}>
              <div className={styles.title}> Education </div>
              <div className={styles.expData}>
                <div className={styles.year}> 2007-2018 </div>
                <div className={styles.information}>
                  <div className={styles.subtitle}> 14-р сургууль</div>
                  <div className={styles.description}> Бүрэн дунд боловсролыг эзэмшсэн.</div>
                </div>
              </div>
              <div className={styles.expData}>
                <div className={styles.year}> 2018-2023</div>
                <div className={styles.information}>
                  <div className={styles.subtitle}> МУИС - ХШИУС</div>
                  <div className={styles.description}> Програм хангамжийн инженер мэргэжлээр суралцаж төгсcөн.</div>
                </div>
              </div>
            </div>

          </div>
          <div className={styles.secondPart}>
            <div className={styles.gallerey}>
                <img src="myPic.jpg" width="200" height="200"></img>
            </div>
            <div className={styles.interest}> 
              <div className={styles.title}> Interest </div>
              <div className={styles.intData}>
                <div className={styles.icon}> < BsFillImageFill /> </div>
                <div className={styles.information}>
                  <div className={styles.subtitle}>Photography</div>
                </div>
              </div>
              <div className={styles.intData}>
                <div className={styles.icon}> < BsFillBookFill /> </div>
                <div className={styles.information}>
                  <div className={styles.subtitle}>Reading</div>
                </div>
              </div>
            </div>
            <div className={styles.skills}>
              <div className={styles.title}> Skills </div>
                <div className={styles.firstSkill}>
                  <div className={styles.subtitle}> Programmin languages</div>
                  <div className={styles.skillData}>
                    <div className={styles.description}>
                      C++ </div>
                    <div className={styles.skillAbility}>
                      <div className={styles.Good}></div>
                      <div className={styles.Bad}></div>
                    </div>
                  </div>
                  <div className={styles.skillData}>
                    <div className={styles.description}>
                      CSS </div>
                    <div className={styles.skillAbility}>
                      <div className={styles.Good1}></div>
                      <div className={styles.Bad1}></div>
                    </div>
                  </div>
                  <div className={styles.skillData}>
                    <div className={styles.description}>
                      HTML </div>
                    <div className={styles.skillAbility}>
                      <div className={styles.Good2}></div>
                      <div className={styles.Bad2}></div>
                    </div>
                  </div>
                  <div className={styles.skillData}>
                    <div className={styles.description}>
                      Javascript </div>
                    <div className={styles.skillAbility}>
                      <div className={styles.Good3}></div>
                      <div className={styles.Bad3}></div>
                    </div>
                  </div>
                  <div className={styles.skillData}>
                    <div className={styles.description}>
                      Java </div>
                    <div className={styles.skillAbility}>
                      <div className={styles.Good4}></div>
                      <div className={styles.Bad4}></div>
                    </div>
                  </div>
                </div>
            </div>
            <div className={styles.contacts}>
              <div className={styles.title}> Contact</div>
              <div className={styles.conData}>
                <div className={styles.icon}> <BsFillPhoneVibrateFill/></div>
                <div className={styles.desc}> +97688482652 </div>
              </div>
              <div className={styles.conData}>  
                <div className={styles.icon}> <BsMailbox2/> </div>
                <div className={styles.desc}> blroktyabri@gmail.com</div>
              </div>
              <div className={styles.conData}>
                <div className={styles.icon}> <BsInstagram/></div>
                <div className={styles.desc}> blr_oo </div>
              </div>
            </div>
         </div>     
        </div>
      </div>  
  )
}
