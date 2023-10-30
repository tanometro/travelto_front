"use client";
import AdminUsersTable from "@/src/Components/AdminComponents/Users/AdminUsersTable";
import AdminAttractionsTable from "@/src/Components/AdminComponents/Attractions/AdminAttractionsTable";
import AdminLocationsTable from "@/src/Components/AdminComponents/Locations/AdminLocationsTable";
import style from "./page.module.css";
import { useState } from "react";

export default function AdminDashboard() {
  const [mostrar, setMostrar] = useState(<></>);

  const userClick = () => {
    setMostrar(<AdminUsersTable />);
  };
  const attractionsClick = () => {
    setMostrar(<AdminAttractionsTable />);
  };
  const locationsClick = () => {
    setMostrar(<AdminLocationsTable />);
  };

  return (
    <main className={style.grid}>
      <div className=" rounded-lg justify-center w-full h-full bg-black border bg-title-color border-solid p-4 col-start-1 col-end-1 row-start-1 row-end-3 flex flex-row flex-wrap">
        <button className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-4/5 h-1/5 border-solid">
          <p className="m-2">Cantidad de visitas</p>
          <p className=" text-4xl text-lime-600">2000</p>

          <button>Acceda a la gráfica de visitas haciendo Click</button>
        </button>
        <button
          onClick={userClick}
          className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-4/5 h-1/5 border-solid"
        >
          <p className=" m-2">Cantidad de Usuarios</p>
          <p className=" text-4xl text-lime-600">200</p>
          <p className=" text-sm">Acceda a la Lista de Usuarios haciendo Click</p>
        </button>
        <button onClick={attractionsClick} className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-4/5 h-1/5 border-solid">
          <p className=" m-2">Cantidad de Atracciones</p>
          <p className=" text-4xl text-lime-600">50</p>
          <p className=" text-xs">Acceda a la Lista de Attracciones haciendo Click</p>
        </button>
        <button onClick={locationsClick} className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 w-4/5 h-1/5 border-solid">
          <p className=" m-2">Cantidad de Ciudades</p>
          <p className=" text-4xl text-lime-600">30</p>
          <p className=" text-sm">Acceda a la Lista de Ciudades haciendo Click</p>
        </button>
      </div>
      <div className=" rounded-lg w-full h-full bg-black border bg-title-color border-solid col-start-2 col-end-2 col-span-1 mb-2 ml-2 justify-evenly items-center flex">
        <button className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/5 border-solid">
          Nuevo Usuario
        </button>
        <button className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/5 border-solid">
          Nueva Atraccion
        </button>
        <button className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/5 border-solid">
          Nueva Ciudad
        </button>
        <button className=" hover:border-lime-400 font-second-font font-semibold text-xl rounded-xl text-zinc-50 bg-slate-700 m-2 h-4/5 w-1/5 border-solid">
          Log Out
        </button>
      </div>
      <div className=" rounded-lg w-full h-ful  bg-black border bg-title-color border-solid p-4 col-start-2 col-end-2 ml-2 mt-2 flex flex-row justify-center">
        {mostrar}
      </div>
    </main>
  );
}
