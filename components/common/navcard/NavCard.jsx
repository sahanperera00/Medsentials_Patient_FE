import { useState } from "react";
import ButtonGroup from '../elements/ButtonGroup'   //taken from the elements
import { useRouter } from "expo-router";

const NavCard = () => {
  const [selectedItem, setSelectedItem] = useState("one");
  const router = useRouter();
  const items = [
    {
      value: ()=>router.push('/purchase-order/create'),
      label: "Button 1",
    },
    {
      value: ()=>router.push('/login/'),
      label: "Button 2",
    },
    {
      value: ()=>router.push('/sites/'),
      label: "Button 3",
    },
    {
      value: "four",
      label: "Four",
    },
  ];

  return (
    <ButtonGroup
      items={items}
      selectedItem={selectedItem}
      onSelect={(newSelectedItem) => setSelectedItem(newSelectedItem)}
    />
  );
};

export default NavCard;