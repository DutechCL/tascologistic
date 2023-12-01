<script>
    localStorage.setItem('token', '{{ $token }}')
    localStorage.setItem('csrfToken', '{{ $csrfToken }}')
    document.location = "{{ $redirectTo }}"
</script>