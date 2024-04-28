<template>
  <table class="body">
    <thead>
      <tr class="fila-encabezado">
        <th>Logo</th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr 
      v-for="a in assets"
      :key="a.id"
      class="fila-dato">
        <td>
          <img
            class="img"
            :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`"
            :alt="a.name">
        </td>
        <td>
          <b>{{ a.rank   }}</b>
        </td>
        <td>{{ a.name }}</td>
        <td>{{ dollarFilter(a.priceUsd) }}</td>
        <td>{{ dollarFilter(a.marketCapUsd) }}</td>
        <td :class="a.changePercent24Hr.includes('-') ? 'text-red' : 'text-green'">
          {{ percentFilter(a.changePercent24Hr) }}
        </td>
        <td>
          <button
            class="custom-button"
            @click="detailRow(a)">
            Ver detalle
          </button>
        </td>
        <!-- <td class="oculto mostrar-sm"></td> -->
      </tr>
    </tbody>
  </table>
</template>

<script>
import getAssets  from '@/api';
import { dollarFilter, percentFilter } from '@/filter';

export default {
  name: "PxAssetsTable",

  data() {
    return {
      assets: [],
    }
  },

  mounted() {
    this.fetchAssets();
  },

  methods: {
    async fetchAssets() {
      try {
        const data = await getAssets();
        this.assets = data; // Establece la data en la propiedad 'assets' del componente
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    detailRow (row) {
      console.log(row);
    },
  },

  setup() {
    return {
      dollarFilter,
      percentFilter
    }
  }
}
</script>

<style scoped>

.body {
  margin-left: auto;
  margin-right: auto;  
  margin-top: 10px;
}

.img {
  width: 60px;
}
.text-red {
  color: red;
}

.text-green {
  color: green;
}

.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}

.fila-encabezado {
      background-color: #f0f0f0;
      border-bottom: 2px solid #ccc; /* Mantenemos el borde inferior */
    }
    
    /* Estilos específicos para las filas de datos */
    .fila-dato:hover {
      background-color: #ffedcc;
    }
    
    /* Estilos específicos para dispositivos pequeños */
    .oculto {
      display: none;
    }
    
    .mostrar-sm {
      display: block;
    }
    
  .custom-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none; 
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background-color: #45a049;
}

</style>
