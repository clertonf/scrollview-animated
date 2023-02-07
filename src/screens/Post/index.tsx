import React, { useState, useRef } from "react";
import { View, Text, ScrollView, useWindowDimensions } from "react-native";

import { ProgressBar } from "../../components/ProgressBar";
import { styles } from "./styles";

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  }
  contentOffset: {
    y: number;
  }
  contentSize: {
    height: number;
  }
}

export function Post(){
  const [percentage, setPercentage] = useState(0);
  const scrollRef = useRef<ScrollView>(null);

  const dimensions = useWindowDimensions();

  function scrollPercentage({ contentSize, contentOffset, layoutMeasurement }: ScrollProps){
    const visibleContent = Math.ceil((dimensions.height / contentSize.height) * 100);

    const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
    setPercentage(value < visibleContent ? 0 : value);
  }

  function handleScrollMoveTop(){
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
        onScroll={(event) => scrollPercentage(event.nativeEvent)}
      >
        <Text style={styles.title}>
          Lorem ipsum
        </Text>

        <View>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates necessitatibus beatae nemo cum expedita illo totam sunt, iure quos vero exercitationem quam aliquid eligendi? Minus nemo soluta accusamus exercitationem perspiciatis?
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates necessitatibus beatae nemo cum expedita illo totam sunt, iure quos vero exercitationem quam aliquid eligendi? Minus nemo soluta accusamus exercitationem perspiciatis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente corrupti nisi, in voluptate dolores hic, assumenda voluptatum et animi doloribus quisquam nobis quae accusamus id dicta dolorum, excepturi quasi.
          </Text>

          <Text style={styles.text}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates necessitatibus beatae nemo cum expedita illo totam sunt, iure quos vero exercitationem quam aliquid eligendi? Minus nemo soluta accusamus exercitationem perspiciatis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sapiente corrupti nisi, in voluptate dolores hic, assumenda voluptatum et animi doloribus quisquam nobis quae accusamus id dicta dolorum, excepturi quasi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dignissimos harum magnam enim eius hic minima ipsa placeat, nulla repudiandae ex magni qui? Obcaecati veniam repellendus id consequatur iusto adipisci.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, provident? Laudantium blanditiis iusto nam animi nisi, sit minima aliquam cumque perspiciatis fugiat asperiores quos magni temporibus cupiditate doloremque pariatur necessitatibus!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, possimus! Sequi numquam labore est neque? Aperiam eius, minus corrupti dolore fuga autem esse exercitationem, odit dolorum odio, amet obcaecati facilis?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A repudiandae aut, sequi est enim cum veniam soluta, alias autem ipsa voluptatum optio eaque officia molestiae, iste nesciunt doloribus ratione. Quo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti itaque, nemo molestias corporis odit labore ratione hic cumque aspernatur reprehenderit, dicta similique impedit eaque quia at repudiandae error deserunt.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, quidem! Laborum excepturi, tenetur quis eligendi error dignissimos accusamus facere dolores id sit ea aut sequi minus voluptate saepe, maiores vitae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, optio quidem sit eligendi, assumenda odit dicta possimus doloremque praesentium dolorem minima dolor obcaecati animi dolorum. Officia nesciunt voluptas qui excepturi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate harum eligendi minus voluptate, officia minima, eos iusto eius, sit doloribus optio deleniti id perspiciatis totam! Cupiditate ipsum ratione aperiam!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex iusto adipisci cumque dicta minus, corporis incidunt fugiat iste quos distinctio modi quasi commodi, necessitatibus quam voluptates in non dignissimos consequuntur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem atque, iusto beatae dolore, odit dolorum unde perspiciatis molestiae iure iste recusandae quod accusantium autem error maiores nobis magni, necessitatibus quam!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi sit quis cumque numquam ipsum aut, incidunt adipisci, officiis, deserunt nobis consequuntur possimus non ratione cupiditate. Velit atque omnis nam dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, provident itaque. Molestias possimus, doloribus omnis necessitatibus atque accusamus doloremque debitis quo odio eius ratione libero excepturi laboriosam, minus similique enim?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi provident officia veritatis, hic error, maxime ea iste tempora totam alias magni accusamus nostrum consequatur, ipsa vero voluptate quasi. Excepturi, consequuntur.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore deleniti tempora modi similique cumque. Quasi omnis nesciunt assumenda maiores enim ad, dolores, libero qui laboriosam iste ratione quibusdam facilis. Error.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur sapiente provident quia expedita quas est, ratione fugit cupiditate cum nesciunt sint, corrupti, tempora inventore aut velit? Voluptatem quae pariatur repellendus.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto architecto exercitationem hic sequi iure est itaque molestias fugiat, temporibus sunt recusandae obcaecati fugit dolores placeat maxime dolor labore animi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus aut quae saepe nesciunt qui voluptatum necessitatibus tenetur, officiis accusantium mollitia ea dolor. In fuga tenetur error nulla quos repellendus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eaque voluptatem incidunt quibusdam veniam sint, possimus facilis iusto similique pariatur quasi laborum perferendis maxime soluta eum inventore ducimus. Nesciunt, quis?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nemo similique, praesentium eveniet nesciunt mollitia tempore harum reiciendis accusantium nihil odio quasi tenetur. Assumenda consequuntur beatae doloremque ut optio consectetur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla commodi quo saepe ipsam, officiis iusto illo! Provident ex perferendis, accusamus voluptatibus inventore et doloribus sed quasi accusantium asperiores nam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque optio, praesentium tempore saepe, quae impedit autem magni possimus ullam eveniet illo vero dolorem dicta similique nobis necessitatibus blanditiis eum.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto architecto exercitationem hic sequi iure est itaque molestias fugiat, temporibus sunt recusandae obcaecati fugit dolores placeat maxime dolor labore animi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus aut quae saepe nesciunt qui voluptatum necessitatibus tenetur, officiis accusantium mollitia ea dolor. In fuga tenetur error nulla quos repellendus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eaque voluptatem incidunt quibusdam veniam sint, possimus facilis iusto similique pariatur quasi laborum perferendis maxime soluta eum inventore ducimus. Nesciunt, quis?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut nemo similique, praesentium eveniet nesciunt mollitia tempore harum reiciendis accusantium nihil odio quasi tenetur. Assumenda consequuntur beatae doloremque ut optio consectetur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nulla commodi quo saepe ipsam, officiis iusto illo! Provident ex perferendis, accusamus voluptatibus inventore et doloribus sed quasi accusantium asperiores nam.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti eaque optio, praesentium tempore saepe, quae impedit autem magni possimus ullam eveniet illo vero dolorem dicta similique nobis necessitatibus blanditiis eum.
          </Text>
        </View>
      </ScrollView>

      <ProgressBar
        value={percentage}
        onMoveTop={handleScrollMoveTop}
      />
    </View>
  )
}
