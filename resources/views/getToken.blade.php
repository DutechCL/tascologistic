<script>
    localStorage.setItem('token', '{{ $token }}')
    document.location = "{{ $redirectTo }}"
</script>