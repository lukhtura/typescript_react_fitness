//Types
import { SelectedPage, ClassType } from '@/shared/types'

//Animation
import { motion } from 'framer-motion';

//Parts
import HText from '@/shared/components/HText';
import Class from './Class'
import img1 from "@/assets/oc1.png";
import img2 from "@/assets/oc2.png";
import img3 from "@/assets/oc3.png";
import img4 from "@/assets/oc4.png";
import img5 from "@/assets/oc5.png";
import img6 from "@/assets/oc6.png";


const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea labore incidunt quo, voluptatibus libero voluptas tenetur rem, quia magni quas tempore?",
        image: img1
    },
    {
        name: "Yoga Classes",

        image: img2
    },
    {
        name: "Ab Core Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea labore incidunt quo, voluptatibus libero voluptas tenetur rem, quia magni quas tempore?",
        image: img3
    },
    {
        name: "Adventure Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea labore incidunt quo, voluptatibus libero voluptas tenetur rem, quia magni quas tempore?",
        image: img4
    },
    {
        name: "Fitness Classes",
        image: img5
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea labore incidunt quo, voluptatibus libero voluptas tenetur rem, quia magni quas tempore?",
        image: img6
    },
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="ourclasses"
            className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>

                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>

                    <div className="md:w-3/5">
                        <HText>
                            OUR CLASSES
                        </HText>
                        <p className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
}

export default OurClasses;