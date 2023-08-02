@php
        $permissions = DB::table('permissions')->distinct('slug')->pluck('slug')->toArray();
        $slugs = array_combine($permissions, $permissions);

        $menuItem = \App\Models\MenuItem::find( request()->route('id'));
        if ($menuItem) {
            $selectedSlug = $menuItem->permission;
        }
@endphp


<div class="col-md-12 mb-3">
    <label for="slugs">Vista</label>
    <select id="slugs" name="slugs" class="form-control">
    <option value=""> </option>
        <?php
        if (isset($slugs) && !empty($slugs)) {
            foreach ($slugs as $slug) {
                $slug = htmlentities($slug);
                $selected = ($slug === isset($selectedSlug) ? $selectedSlug->slug : '') ? 'selected' : '';
                echo "<option value=\"$slug\" $selected>$slug</option>";
            }
        }
        ?>
    </select>
</div>


<div class="col-md-12 mb-3">
    <label for="permisions">Permiso</label>
    <select id="permisions" name="permisions" class="form-control">
    </select>
</div>

<div class="col-md-12 mb-3">
    <label for="url">Enlace</label>
    <input id="url" name="url" class="form-control" />
</div>

<script>
    function getPermissions(slug) {
        var xhr = new XMLHttpRequest();
        var url = 'http://tascologistic.test/api/v1/permission/' + encodeURIComponent(slug);

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                var opcionesHTML = '';
                opcionesHTML += '<option value=""> </option>';
                for (var i = 0; i < data.length; i++) {
                    selectedPermission = (data[i].name === "<?php echo isset($selectedSlug) ? $selectedSlug->name : ''; ?>") ? 'selected' : '';
                    opcionesHTML += '<option value="' + data[i].id + '" '+selectedPermission+ ' >' + data[i].name + '</option>';

                    if(selectedPermission === 'selected')
                    {
                        getUrl(data[i].id);
                    }
                }
                document.getElementById('permisions').innerHTML = opcionesHTML;
            }
        };

        xhr.send();
    }

    function getUrl(permission) {
        var xhr = new XMLHttpRequest();
        var url = 'http://tascologistic.test/api/v1/permission/url/' + encodeURIComponent(permission);

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                document.getElementById('url').value = data[0].url;
            }
        };

        xhr.send();
    }



    document.getElementById('permisions').addEventListener('change', function() {
        var permission = this.value;
        if (permission !== '') {
            getUrl(permission);
        }
    });

    document.getElementById('slugs').addEventListener('change', function() {
        var slug = this.value;
        if (slug !== '') {
         getPermissions(slug);
        }
    });

    window.onload = function() {
        var slugSeleccionado = document.getElementById('slugs').value;
        if (slugSeleccionado !== '') {
            getPermissions(slugSeleccionado);

            var selectedPermissionId = "<?php echo isset($selectedSlug) ? $selectedSlug->slug : ''; ?>";
            if (selectedPermissionId !== "") {
                document.getElementById('permisions').value = selectedPermissionId;

                getUrl(selectedPermissionId);
            }
        }
    };
</script>