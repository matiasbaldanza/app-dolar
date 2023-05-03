"use client";

import type {Cotizacion} from "../types";

import {useState} from "react";

import Form from "../components/Form";

export default function HomeClient({cotizaciones}: {cotizaciones: Cotizacion[]}) {
  const [amount, setAmount] = useState(0);

  return (
    <main className="grid gap-8">
      <section>
        <Form value={amount} onChange={(_amount: number) => setAmount(_amount)} />
      </section>
      <section className="flex-1 p-8 text-white rounded-xl bg-emerald-800">
        <ul className="flex flex-col gap-4">
          {cotizaciones.map(({nombre, venta}) => {
            const total = amount ? Number(amount / venta) : venta;

            return (
              <li key={nombre} className="flex items-center justify-between gap-4">
                <div className="text-emerald-100">{nombre}</div>
                <div className="flex items-center gap-4">
                  {amount ? (
                    <div className="text-xl font-bold text-emerald-500">
                      {Number(total).toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                      })}
                    </div>
                  ) : null}
                  <div className="text-3xl font-bold text-emerald-300">
                    {Number(venta).toLocaleString("es-AR", {
                      style: "currency",
                      currency: "ARS",
                    })}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
