const TripCard = (props) => {
  return (
    props.id <7 ?
      (<div className="w-56 h-64 bg-white text-white shadow-black shadow-sm relative overflow-hidden">
      <div className="relative h-full ">
        <img src={props.url} className="object-cover w-full h-full" alt="" />
      </div>
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-transparent to-black p-4 text-white text-center">
        <h3 className="text-lg font-bold">{props.title}</h3>     
      </div>
    </div>)
    : null

    
  );
};

export default TripCard;

// const TripCard = (props) => {
//   return (
//     <div className="w-56 h-64 bg-white text-white shadow-black shadow-sm relative overflow-hidden">
//       <div className="relative h-full">
//         <img src={props.url} className="object-cover w-full h-full" alt="" />
//         <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-black p-4 text-white text-center flex flex-col justify-end">
//           <h3 className="text-lg font-bold">{props.title}</h3>
//           <p className="text-sm">{props.subtitle}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TripCard;

