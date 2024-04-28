<template>
    <header class="shadow w-screen">
        <nav>
            <nav class="flexbox-container">
                <div class="flexbox-item">
                    <span class="logo">ChrisExchange</span>
                </div>
                <div class="hidden-sm-block full-width flex-grow lg-flex lg-items-center lg-wauto">
                    <div class="text-sm lg-flex-grow"></div>
                </div>
            </nav>
        </nav>
    </header> 
</template>

<style>
/* Estilos para el contenedor flex */
.flexbox-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #48BB78;
    padding: 1.5rem;
}

/* Estilos para el logo */
.logo {
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: -0.025em;
    color: #FFF;
    margin-right: 0.75rem;
}

/* Estilos para ocultar en dispositivos pequeños */
.hidden-sm-block {
    display: none;
}

@media (min-width: 640px) {
    .hidden-sm-block {
        display: block;
    }
}

/* Estilos para ajustar el tamaño */
.full-width {
    width: 100%;
}

.flex-grow {
    flex-grow: 1;
}

/* Estilos para dispositivos grandes */
@media (min-width: 1024px) {
    .lg-flex {
        display: flex;
    }

    .lg-items-center {
        align-items: center;
    }

    .lg-wauto {
        width: auto;
    }
}

</style>