import { ReactElement, useEffect, useState } from "react";

import HTHead, {Pages} from "../../components/HTHead/HTHead";
import TitleSection from "../../components/TitleSection/TitleSection";
import MemberCard from "../../components/MemberCard/MemberCard";

import config from "../../../htconfig.json";
import styles from "./MembersPage.module.css";

export default function MembersPage(): ReactElement {
    const [members, setMembers] = useState([]);
    const [error, setError] = useState(false);
    const getMembers = () => {
        if (config.members) {
            setMembers(config.members);
            setError(false);
        } else setError(true);
    };
    useEffect(() => getMembers(), []);

    return (
        <>
            <HTHead page={Pages.members}/>
            <TitleSection title="Участники"/>
            <section className={styles["list-section"]}>
                <div className="wrapper">
                    {!error && (
                        <p className={styles["text"]}>
                            Показано {members.length} участников
                        </p>
                    )}
                    {error && (
                        <p className={styles["text"]}>
                            Участники не найдены
                        </p>
                    )}
                    {!error && (
                        <div className={styles["content"]}>
                            {members.map((member, index) => {
                                return <MemberCard member={member} key={index}/>;
                            })}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}