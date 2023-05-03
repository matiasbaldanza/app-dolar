import HomeClient from "./client";

export default async function Home() {
  const data = await fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales").then(
    (res) => res.json() as Promise<{casa: {nombre: string; compra: string; venta: string}}[]>,
  );

  const cotizaciones = data
    .filter((cotizacion) =>
      ["Dolar Oficial", "Dolar Bolsa", "Dolar Blue"].includes(cotizacion.casa.nombre),
    )
    .map((cotizacion) => ({
      nombre: cotizacion.casa.nombre,
      compra: Number(cotizacion.casa.compra.split(",")[0]),
      venta: Number(cotizacion.casa.venta.split(",")[0]),
    }));

  return <HomeClient cotizaciones={cotizaciones} />;
}
