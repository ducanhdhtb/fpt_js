let thiToiec = new Map([
    ["lan_1", "failed"],
    ["lan_2", "failed"],
    ["lan_3", "failed"]
]);
thiToiec.set('lan_4', 'failed');
// Map(4) {"lan_1" => "failed", "lan_2" => "failed", "lan_3" => "failed", "lan_4" => "failed"}
thiToiec.set('lan_4', 'passed');
// Map(4) {"lan_1" => "failed", "lan_2" => "failed", "lan_3" => "failed", "lan_4" => "passed"}