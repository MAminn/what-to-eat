import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

export const navLinks = [
  {
    href: "/",
    icon: <TbTruckDelivery size={25} className='mr-4' />,
    label: "Orders",
  },
  {
    href: "/",
    icon: <MdFavorite size={25} className='mr-4' />,
    label: "Favorites",
  },
  { href: "/", icon: <FaWallet size={25} className='mr-4' />, label: "Wallet" },
  { href: "/", icon: <MdHelp size={25} className='mr-4' />, label: "Help" },
  {
    href: "/",
    icon: <AiFillTag size={25} className='mr-4' />,
    label: "Promotions",
  },
  {
    href: "/",
    icon: <BsFillSaveFill size={25} className='mr-4' />,
    label: "Best Ones",
  },
  {
    href: "/",
    icon: <FaUserFriends size={25} className='mr-4' />,
    label: "Invite Friends",
  },
];

export const data = [
  {
    id: 1,
    name: "Aged Cheddar",
    category: "cheese",
    image:
      "https://images.unsplash.com/photo-1625085576040-898520ce9e0d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 2,
    name: "Blue Cheese",
    category: "cheese",
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 3,
    name: "Goat Cheese",
    category: "cheese",
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 4,
    name: "Brie Cheese",
    category: "cheese",
    image:
      "https://images.unsplash.com/photo-1624806992066-5ffcf7ca186b?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 5,
    name: "Fruit Jams",
    category: "fruit",
    image:
      "https://images.unsplash.com/photo-1619855328617-c20b7f0eefdd?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 6,
    name: "Marmalade",
    category: "fruit",
    image:
      "https://images.unsplash.com/photo-1645871304737-c61b67752c0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 7,
    name: "Savory Spreads",
    category: "fruit",
    image:
      "https://plus.unsplash.com/premium_photo-1695932845514-199e0dd627ca?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 8,
    name: "Artisanal Bread",
    category: "baked",
    image:
      "https://plus.unsplash.com/premium_photo-1701186689674-06460f8da4a8?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 9,
    name: "Pastries",
    category: "baked",
    image:
      "https://plus.unsplash.com/premium_photo-1667806845059-51fa9165bda1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 10,
    name: "Cookies",
    category: "baked",
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 11,
    name: "Honey",
    category: "honey",
    image:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "$$$",
  },
  {
    id: 12,
    name: "Fruit Salad",
    category: "salad",
    image:
      "https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    price: "$",
  },
  {
    id: 13,
    name: "Wings",
    category: "chicken",
    image:
      "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "$$",
  },
  {
    id: 14,
    name: "Baked Chicken",
    category: "chicken",
    image:
      "https://images.unsplash.com/photo-1594221708779-94832f4320d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hpY2tlbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    price: "$$$$",
  },
  {
    id: 15,
    name: "Chicken Tenders",
    category: "chicken",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: "$",
  },
  {
    id: 16,
    name: "Chicken Kabob",
    category: "chicken",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW4lMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: "$$$",
  },
];

export const categories = [
  {
    id: 1,
    name: "Fast Food",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/FastFood_BrowseHome@3x.png",
  },
  {
    id: 2,
    name: "Pizza",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Pizza_BrowseHome@3x.png",
  },
  {
    id: 3,
    name: "Wings",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Wings_BrowseHome@3x.png",
  },
  {
    id: 4,
    name: "Indian",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Indian_BrowseHome@3x.png",
  },
  {
    id: 5,
    name: "Latest Deals",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Deals_BrowseHome@3x.png",
  },
  {
    id: 6,
    name: "Restaurant Rewards",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/RestoRewards_BrowseHome@3x.png",
  },
  {
    id: 7,
    name: "Best Overall",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/TopEats_Browse%20Home@3x.png",
  },
  {
    id: 8,
    name: "Shipped Free",
    image:
      "https://duyt4h9nfnj50.cloudfront.net/new_search_home_eats_icon/Placeholder_Plates@3x.png",
  },
];
