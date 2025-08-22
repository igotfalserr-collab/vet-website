<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Dilution Calculator — Lionel’s Vet</title>

  <!-- Tailwind + Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="script.js" defer></script>
</head>
<body class="bg-gray-50 text-gray-800">
  <!-- Nav -->
  <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
    <div class="max-w-4xl mx-auto flex items-center justify-between p-4">
      <a href="index.html" class="flex items-center gap-2 font-semibold text-teal-700">
        <span class="text-2xl">🐾</span> Lionel’s Vet
      </a>
      <nav class="hidden md:flex gap-6 text-sm">
        <a href="index.html#services" class="hover:text-teal-700">Services</a>
        <a href="training.html" class="hover:text-teal-700">Training</a>
        <a href="biosecurity.html" class="hover:text-teal-700">Biosecurity</a>
      </nav>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold">🧪 Dilution Calculator</h1>
    <p class="text-gray-600 mt-2">Use C1V1 = C2V2 to find how much stock to add.</p>

    <div class="mt-8 rounded-2xl bg-white p-6 border shadow-sm">
      <div class="grid md:grid-cols-3 gap-4">
        <label class="block">
          <span class="text-sm font-medium text-gray-700">Stock Concentration (%)</span>
          <input id="concentration" type="number" step="0.01" value="10"
                 class="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-teal-600 focus:outline-none" />
        </label>
        <label class="block">
          <span class="text-sm font-medium text-gray-700">Desired Concentration (%)</span>
          <input id="desired" type="number" step="0.01" value="1"
                 class="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-teal-600 focus:outline-none" />
        </label>
        <label class="block">
          <span class="text-sm font-medium text-gray-700">Final Volume (ml)</span>
          <input id="finalVolume" type="number" step="1" value="1000"
                 class="mt-1 w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-teal-600 focus:outline-none" />
        </label>
      </div>

      <button onclick="calculateDilution()"
              class="mt-6 inline-flex items-center rounded-full bg-teal-600 text-white px-6 py-2 shadow hover:bg-teal-700 transition">
        Calculate
      </button>

      <p id="result" class="mt-4 text-teal-700 font-semibold"></p>

      <p class="mt-6 text-sm text-gray-500">
        Formula: <code>C1 × V1 = C2 × V2</code> → <code>V1 = (C2 × V2) / C1</code>.
      </p>
    </div>
  </main>
</body>
</html>
