@extends('layouts.app')

@section('content')
    <div class="container">
    <form>
  <div class="form-row">
    <div class="col">
      <input type="text" id="latitud" class="form-control" placeholder="Latitud">
    </div>
    <div class="col">
      <input type="text" id="longitud" class="form-control" placeholder="Longitud">
    </div>
  </div>
</form>
<br><br>
    <div class="row">
        <div id="mapdiv" style="width:100%;height:1000px ; "></div>
    </div>

@endsection

@section('script')
    <script src="{{ asset('js/map.js') }}"></script>
@endsection
