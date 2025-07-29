import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ElectronicProduct from './ElectronicProduct.jsx';
import { useNavigate } from 'react-router-dom';
 // Assuming you have an ElectronicProduct component
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 2000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 2000, min: 900 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 900, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function ElectronicsCarousel() {
const navigate = useNavigate();
const product=[{
    img:"https://rukminim1.flixcart.com/image/240/240/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60",alt:"TWS",name:"TWS"},
    {img:"https://rukminim1.flixcart.com/image/240/240/xif0q/monitor/b/x/x/-original-imah7rn68zxjzbqx.jpeg?q=60",alt:"Smart TV",name:"Smart TV"},
    {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_ZiKFfAlT-sPDXQ8qt1nIXYaSwiYK8VGxA&s",alt:"Smart Phone",name:"Smart Phone"},
    {img:"https://rukminim1.flixcart.com/image/240/240/xif0q/projector/q/7/6/i9-pro-10-ei9027-led-projector-egate-original-imah5e3bggu5qcgp.jpeg?q=60",alt:"Projector",name:"Projector"},
    {img:"https://rukminim1.flixcart.com/image/240/240/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=60",alt:"Speakers",name:"Speakers"}];
const toys=[{
    img:"https://rukminim1.flixcart.com/image/240/240/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=60",alt:"Coffee",name:"Coffee"},
    {img:"https://rukminim1.flixcart.com/image/240/240/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=60",alt:"Stationery",name:"Stationery"},
    {img:"https://rukminim1.flixcart.com/image/240/240/l111lzk0/cycle/m/r/e/xc-900-grey-lite-26-15-5-cradiac-21-gear-120-original-imagczuzpxeweczm.jpeg?q=60",alt:"Geared",name:"Geared Cycle"},
    {img:"https://rukminim1.flixcart.com/image/240/240/k0plpjk0/remote-control-toy/9/g/k/4-function-remote-control-high-speed-big-racing-car-toy-funkey-original-imafkg33umd8dy93.jpeg?q=60",alt:"Remote",name:"RC toys"},
    {img:"https://rukminim1.flixcart.com/image/240/240/kzegk280/action-figure/9/v/t/3-30155-mcfarlane-2-5-original-imagbeyyzehpyk2m.jpeg?q=60",alt:"Action",name:"Action Toys"}];
const healthcare=[{
    img:"https://rukminim1.flixcart.com/image/240/240/kcjexe80/honey/w/y/4/1-honey-saffola-original-imaftn9ppz2shxzg.jpeg?q=60",alt:"Honey",name:"Honey"},
    {img:"https://rukminim1.flixcart.com/image/240/240/ks6ef0w0/cereal-flake/q/w/h/1-oats-veggies-masala-oats-pouch-yogabar-original-imag5suhzvwy3xh4.jpeg?q=60",alt:"Oats",name:"Oats"},
    {img:"https://rukminim1.flixcart.com/image/240/240/kkimfm80/tea/z/n/1/premium-pouch-regular-tea-powder-tata-original-imafzuf2mnubzphd.jpeg?q=60",alt:"Tea Powder",name:"Tea Powder"},
    {img:"https://rukminim1.flixcart.com/image/240/240/krgohow0/learning-toy/1/a/h/mapology-ultimate-indian-combo-india-with-capitals-map-puzzle-original-imag59f2vyh63v9x.jpeg?q=60",alt:"Learn",name:"Learning Toys"},
    {img:"data:image/webp;base64,UklGRm4NAABXRUJQVlA4IGINAADwWQCdASpoAQ4BPp1OoEylpCaiI/QZYNATiWVu4MiWv8sNsoz1bt5jdHPkIzNi/Y8qh5DMoe4vi+jbb43eN0KV80LW96wD/28zMQmbKk/GGRI9D4Fv3UXFqK7+5ZUV39yyorv7llPJD8QAT3/FL/ZfuYB4ZI1r97NmeXbLNEnSora8TZlAnului98Kpu6awRoF5zI/N+vgKlnD6oXDRMKleKIY34g4d/PXZ3BcZjZjTCqdll77qdtFLbSOUeeTEWkgQdpX5+BUnGzN+4Mti7i48sjyF7h2aIDqVNj9qOANcR/xZQg22Cv987SpAsrWMysLGAfVOPTUlPU06rcPe3HNE1LYP1n2Exrd/B2A1snKrlpw1UA9j/SwswWHQDwA6yY7p+wGDcDvDFF6OazH7zVfvqAJp7zAotzeDPkCL1pZA3trIxLLOdMMHCR0VaN5Wkq+V8g0GAaJUGh8HC7iWq53vvHSpSnxTwrVFd/ct1zD9D7l/TzTL1qn7SYsq4NTXoK52t/QL2Z0RCF5iqh4y9GkwWjRP6vmdfWocv9vQqa31s0SCdOPGZPFHJrANEOKFXILDEhMr5aqHKcx2VbGvUzz+jBAQKBxGj8wEBqTO5o8W/VcoCO7BXHLBUpPsEdzuEXrnkoO4X2V2Hjbes6huN1ffRzZrTorB4yoPYfsJZ1xMi5w3nmAMsDynlcveDHmp3BlhjbCn2QpeDxY5Zr/MhF4vITG9DrchY7UDmB77VC1X9gbZHup8zd6V+CEU+fprh7o842G2tm5/i+AbWljt28DLjMyz5ME0DRtM53iKVj4g4EryBy/7Z//glnDEDxLkHilDYBRWiJ+ctehkDYjvcEeYvvoUhe2bIvl8fNyM3mFbm4tDAl/p1DyQHG/o036qiuo6AYz7Wc2zd5iC2txlOLPmVXuW7WSEy4PznpqOZByMu14HLzkm4lTEI0KykhdhorwHzyGpa9UAAD+nS+fWrL0gxoLbY5oDhr+A+wH5UDkUvZVtariSY/K8h4iZMd4xQ1vNqb8vqrSHGGtKJVGbpaCAJGtJfm7//AjW1WI/fm7FEiSCdiRm9xN4hfzoG0qpb2Llp/ClNvGK4C+uuy1dGBwLoN9JXaH+QCpAMXu62mSWxEwHBlqT7Dv7uGeCffAfBW0PmmVeNApa9T2S1MdPbpf34DQ636BgKH5zR8O88dzCJxP01qX69LUec0J2hwdbzzGpGzlmY8SACG4MVjHgglrQO5PF+tfYv0Eyis/0Bu4zOENcaC0YMkHPma9cwnhsSXRm9d/KMBFMieNR0LYIAiYFZEWP1ZTvvTlxGyo17QYPb8qAQSWGfIonsckNoPOCtzvohAr/VZzkRvj0M0XglxgdjYGakN95/3R8YnjOfkfFcmaUVSOyn4MYKBxy86zQRd7C04yJ+SL4LT5lPWHRfIqKCwDE7HAtP7LJA3GZNzxYaF6jdgXqWegD7O6Qq5go5awPjnlwJqrhgA0wAPGz1UZdlzSez2mM11muWm2CCy5czUhMMOV90EOcgM8gAR/CLtYjHXpseLvexcylZ9U+t+zuyxGfG+5/Nj8OVBQXuIuNTzzdTO7mRaJI6vmhmwpFxFHQT+PzmlYhRmjYKyh7SMLpQEsSZh5LY8vPl9RNhibA6hFZBvN/cGQxmGrNc/9+fZsGFkIO2gDo9T1dSUV+N/mkcrXApzbhVe30S2fGS2W46qRXglYw7JA8DPQKxpsvNyq+KFb8ERhB1bKZ0IC4dftTS8VUFblbAzlocb0zrs8mEBWij40BcOYuDKLAJFRDF/nyQTwZjX8JsExTiEOAXEIcZQtlCkW3tWaYm4OwLUBIxpTM3GL6iEg61J0KnFX++qoNFLcCFYF24MlflzMy3PrbCHYtly5MXYcN7Fzq5iQyIoGpcUrjIVm8Ghjrt2L9WEnQq2yFNloQuvBt39b0eu2vZUle2RWXIiwaDFh87+OyV1wu94zmVmjI4Lw79g3EZUMxSiiPh8C5V3AEfHIpb1O5/ipyUkgq0KqfSoKH5FBu6kfaV1VvGVtxrZ+vGo0u0yhtl6Ua7boytL9mOZAYOFqotszpOgcQJv1sttNCpo+FcgiIUxer8ZM29lv+Al5iSUAl77uqPJWamn223XuRA2t6mRpDNjD1RCzvYXzzoNDeZWwI3UeugFZiqO1KiLbKJLc07We4nVYqdLZwcLS5MfrrHm5P2Yic2KUqI0e5j/h6r7D8VtQ8TKzfQ/ATYoOKDNcE8hJKp62bFpag0s0Q674eLqR9xg8fpO6a1UVM1qmoLhPC5zrtNKB9YRt4d5uhNAnd+aGl1K+FrqZBQaZhYFsrL90cbAkbZWqhpGS4nO7Eu3zm9AJtM2YW7CGgXR95CT88SHjAJn2qpBpV/dwxJZuRr9SeIhGmbKrKN0GX6ESvClWVAuH24NhzJSdozAJdXNYFqoEKPdAWASzFKcrreW7caXUlwhnRWhMShxrVJwz+AdPPsoHt87NAV2UJ7W3ofkVRZdZ937QWaDAra6LEaSDnGkQ0zZBi9bVfj0DbfP5DhlXcCi4Vlz9DmNiz2MOaxxEFN5eVAZlaU4tvvZ8cpBhmlgXoZWqkbTUSaDus2yc6h86+Y2e2trF/3Xtv0w/iTNhKt5iDyLLdjVbnmlHIko6E1LsoL4fFQDY+5GFu6qa2LfIB8W0mHuf09AxZGkS31ada/LIkrwHQR1n6ZB8AKkPUzqNWrzWqpNOwcstVihc368S8uZwPLZuq8NFwSPe5JifZeA2swDWI3rRrFlceJ96Vn5NCcBO9J772+3SKJWV41sLkIMC51XQHVYnh4tRd+Le3pwd2u6API25fsKOIauojhuvTnGr8AzV5ECfhQPyTMqgneIgdAvLys9OKDXVMw5YsmhVJAeE0RJJ5IaBuoI9XzOEtCs8IgGst2NugfN9avBIvyX6Pixu8Ay7Masw02LQos+XL8tpsp/64DUptwmk188PTXP3jxhrnY9Y+tvxdK3Q4smQrE3xMB9LrJlKgkiF0nh1SsskX+kJU6P3eVPaq0pZ/pXvJOQwI8POZGmT5CTFrdoS6WXNxu0EaIStQWWy8dVA+ReUuH8S7uRQUuflVtKyAsVwOFDYXaeiKaIh9f+lPyjrYkNfHswLWEXuKMeOxrulslrHmkWq9O1aFMTmkVX8MJ6mNCs7wON39QzCWSM07jCJwHplftxK9ZUKqifn+RlAL9uqhIlrAEkExQTcBbac9m5l986Ao0WCMSE9JMoFfApgDVmg6E1TFd4jvnjiweWeXa5Up4VuZdklDnfDBgY+a5oHgbVKznix6imk6ydTYVojJCPJMMCWBPuCE9cIvU1F6wSzyJhz5aju6rQUfBjSUb0PVpRVN3dEV4/p3TpOE2cUkGqDB13jynWHj8D5oVdSQ8w9aomyUV2WBXIPF0ONMEc2AVx7dm/jOpzH1IJfJbltsR8LP//ggCLyvpBLjNCI9+m9Zet7gAd475OodeZGz4/pAmwenxWR8788MS3QvrrDMNPWbBQ9Ioxl2YMf1jbL881VsoWFErswDgXGSDpmRH9kMXl2SehQtN0aaWQFvfgfpZn06ifBoNj2RyzGEW1tsBXutXJ8UHKL0AXJLRRYENH0JKczgbwpCCwBwAicrsBCD9nL2jK7u7emjTVC/CmBx3ulHM3TvstFVAogc4gQOB3IGR5NfwdWFkMT/h0qilWosIVYyzn4zuBgPgGTQY5q3S492tI1S29J8MeWhmjRkspSDSij0le/9l6zSDm54OoXqoLuynXkE0Yr2mW99yaFZPCkYl34tUpYDrkRL0KODvyYNzmNgh1Cu+SCDoFYDal6O8Kuz15EwW4M43GSbzybUBhwBBvuQIvMHukWst7XJ9iHlWueBH4Vp1f0UTCCd5waMM7zzxG9kKtPgtTwzulx1djbqY2155sMMBNu6msb22O5c1+Qn8qsjajvoAGh1iPDlEds2Fhbp3tJ0q4O2JfWqHZLwlp7E+0Q+/iW2aZq9NF8jRNFJiAprW/HhcPgXF2GhvgiHpBf33ALEEl+POymKKFrY9VIYHU5IKT5ESo/l67OZXbTzC3g1ege8G7R/ifkmDDsPDsfdj6l6RMXZaE9BIYdSdnJXrQ2dxoYTTkIAUNQu1QJMd+DNPQjQBON0Tj7Z3qgWUY04QASh2pPuvEwqOSNQV9KiEIpEdCYzfUF9DXNS6n7RCgOFaSKlPLKykFRJpZz6VPZuevioYc+maTOsVroJmn8Xp4HDsR4HRdJxftwQNvYNvudFQAsMWCc1oRK7ncbP9UqV5G2ECdXl3HaD1Qd/PVQvr9sHRFkOfxc4UD2YcpIaVW1xvQ1K+UCboqBajlxqX8QPVdHErFjQpgmvwaG6YqE2bFfhdrjQM8Pkdsn7GBdBny0G93sOucydBckIyVrYCyCOQl0xZ+7DWQIo0SR3C4zWAZ5RVZbGwIR6NnsA8yv1RMpkYsd8g5tlZfmt2HL9OcFtClA0o7qaeK7UhIEIZdVQPr/E5nnQ0fM2TcCMUzDbaweA1I5h9u/xGoqmThWg/SVwT28na5oUAwBK/EEz3CsAAAAAAAAAAA=",alt:"Boots",name:"Boots"}];
    const toy = toys.map((item, index) => (
  <ElectronicProduct key={index} img={item.img} alt={item.alt} name={item.name} />
));
const prod = product.map((item, index) => (
  <ElectronicProduct
    key={index}
    img={item.img}
    alt={item.alt}
    name={item.name}
    onClick={() => {
      if (item.name === "Smart Phone") {
        navigate("/smartphones") 
      }
      else if (item.name === "Smart TV") {
        navigate("/smarttvs")
      }
    }}
  />
));
const health = healthcare.map((item, index) => (
  <ElectronicProduct key={index} img={item.img} alt={item.alt} name={item.name} />
));
return(
    <>
    <h1>Electronics Items</h1>
<Carousel responsive={responsive} className="ElectronicsCarousel">
  {prod}
</Carousel>
<h1>Beauty, Food, Toys and More</h1>
<Carousel responsive={responsive} className="ToyCarousel" >
  {toy}
</Carousel>
<h1>Sports, HealthCare and More</h1>
<Carousel responsive={responsive} className="healthCarousel" >
  {health}
</Carousel>
</>
);
}