<!-- Botón personalizado -->
<button type="button" class="btn btn-primary" id="import-button">
    <i class="nav-icon la la-download"></i> Importar
</button>

<!-- Formulario de carga de archivo Excel oculto -->
<form action="{{ route('admin.user.import') }}" method="post" enctype="multipart/form-data" style="display: none;">
    @csrf
    <input type="file" name="excel_file" id="excel-file">
    <button type="submit">Cargar Excel</button>
</form>

<!-- Script para capturar el evento de clic del botón personalizado y activar el botón oculto -->
<script>
document.getElementById('import-button').addEventListener('click', function() {
    document.getElementById('excel-file').click();
});

document.getElementById('excel-file').addEventListener('change', function() {
    this.form.submit();
});
</script>